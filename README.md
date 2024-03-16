# Next.js Frontend - Social Network Project

<p align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png" width="300" alt="Nest Logo" /></a>
</p>

[![NextJS](https://img.shields.io/badge/Next.js-14.1.3-black.svg)](https://nextjs.org/)

This project is a web application built with Next.js that allows users to view and create posts. Post creation is facilitated through a Golang REST API (<a href="https://github.com/William-Libero/social-networking-posts-and-rabbitmq" target="blank">Project Link</a>), which communicates with another API developed in NestJS (<a href="https://github.com/William-Libero/social-networking-posts-service" target="blank">Project Link</a>) via RabbitMQ.</br>
The posts are ultimately stored in a Supabase database.</br>
Deploy was made in Vercel.

## Features

- View existing posts
- Create new posts
- Communication between Next.js frontend and Golang API
