"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormErrorMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@nextui-org/react";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "./CreatePost.css";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
});

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function CreatePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [postMessage, setPostMessage] = useState("");
  const [openPostMessage, setOpenPostMessage] = useState(false);
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setOpenPostMessage(false);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const response = await fetch(
      "https://social-networking-posts-and-rabbitmq.onrender.com/createPost",
      {
        method: "POST",
        body: JSON.stringify(values),
      }
    );

    if (response.ok) {
      setIsLoading(false);
      handleClick({ vertical: "bottom", horizontal: "center" });
      setPostMessage("Post created successfully!");
      setOpenPostMessage(true);
    } else {
      setIsLoading(false);
      handleClick({ vertical: "bottom", horizontal: "center" });
      setPostMessage("There was an error creating the post, please try again.");
      setOpenPostMessage(true);
    }
  }

  return (
    <div className="w-full pt-5">
      <h1 className="pb-5">Create post</h1>
      {isLoading && (
        <div className="flex justify-center itens-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isLoading && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormErrorMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" type="text" {...field} />
                  </FormControl>
                  <FormErrorMessage />
                </FormItem>
              )}
            />
            <Button
              className="float-right text-white bg-sky-500 hover:bg-sky-600"
              style={{ borderRadius: "5px" }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      )}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={3000}
        open={openPostMessage}
        onClose={handleClose}
        message={postMessage}
        key={vertical + horizontal}
      />
    </div>
  );
}
