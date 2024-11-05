# “Tokyo” Template fo Gozer
This is a simple HTML template for [Gozer](https://github.com/dannyvankooten/gozer). It's clean and straightforward, with no frills. Just your content.


* It does not have support for pagination or tags.
* Dark Mode support.
* [Chota](https://github.com/jenil/chota) v0.9.2 is used.

Live preview: [https://tokyo-gozer.surge.sh](https://tokyo-gozer.surge.sh)

![Light](https://raw.githubusercontent.com/htejera/tokyo-gozer/main/screenshot1.webp)
![Post](https://raw.githubusercontent.com/htejera/tokyo-gozer/main/screenshot2.webp)
![Dark](https://raw.githubusercontent.com/htejera/tokyo-gozer/main/screenshot3.webp)

> Find more themes for Gozer at [Jamstackthemes](https://jamstackthemes.dev/#ssg=gozer)


# Installing and building

Gozer is a static site generator written in Go. Follow these instructions to install Gozer and build your project.

## Prerequisites

Before installing Gozer, make sure you have Go installed. You need Go version 1.11 or later to use Gozer.

## Installing Gozer

To install Gozer, open a terminal and execute the following command:

```
go install git.sr.ht/~dvko/gozer@latest
```

## Project Structure

After initializing your project, you'll find the following structure:

- `content/`: This directory contains your site's content (Markdown files).
- `public/`: Static files, such as: CSS, JS, etc.

## Building

To build your site, navigate to your project's root directory in the terminal and run:

```
gozer build
```

This command processes your content files and generates your site in the `public/` directory.

## Serving the site locally

If you want to preview your site locally, you can serve it using Gozer by running:

```
gozer serve
```

This will start a local web server. By default, you can access your site by going to `http://localhost:8080` in your web browser.

For more information and advanced usage, refer to the [official Gozer documentation](https://github.com/dannyvankooten/gozer).

