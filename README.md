## Hi Tyler! 🙋‍♂️

This is the source code I wrote for your website. If you need help with anything here, give me a call. Otherwise I'd probably leave all this alone if at all possible. It's easy to fix things here, but also pretty easy to break.

## Hi other developers! 🖥️

You either came here to help Tyler in the future, or you're checking out my work. In either case, I'll give a brief rundown of the tools I used for the project below.

## The Tools 🛠️

### Astro 🚀

I went with Astro for the meta framework. It provides some image optimzation, works as a JSX engine, has lots of cool tiny features like an easy way to use the transitions API, and is a good candidate for doing other cool stuff if you want to add a framework or whatever. You can even add multiple frameworks. It's also got a pretty low barrier to entry to start. If you can write HTML, CSS, and markdown, you can start with astro and learn JS along the way.

You can find more information as well as a good tutorial on how to get started at https://astro.build/

### Tailwind 🎨

I went with tailwind for the styling. I've used it for a ton of projects. It's only a tiny bit opinionated, so you can use inline styles if you don't feel like fussing with it too much, but it's pretty easy to use. You just write classes for all the styles directly in your markup. Here's an example:
```html
<div class="flex flex-col gap-4">
	<h1 class="text-5xl">This is my big title!</h1>
	<span class="text-sm italic">This is my small, italicized subtitle</span>
</div>
```
You can find a full list of utility classes at their website: https://tailwindcss.com/

### Netlify 🌎

I went with netlify for hosting. It's got a bunch of helpful features like Captcha for form validation, integration for Contentful, and a bunch more I didn't have a need for. You'll find a netlify folder with functions in it. Netlify is nice because it'll look for that folder and run the functions it finds. You treat them basically the same as Amazon Lamda's functions. It's how I made the API calls to Contentful and SendGrid. Just write your functions and plop them in the folder! Keep in mind, you'll need environment variables in your netlify and your local instance while you're working.

### Contentful 📓

I used Contentful for the Content Management System. This is so that hopefully Tyler won't need to touch this code often, if ever. He can update images, dates, whatever from Contentful. You'll find a call to the API on each page where it's used. You'll use query parameters to access the content via different content models. I chose to get the content at build time so it can get cached (it'll be faster for the end user). Netlify has a nice integration with it too, it's got a web hook that'll fire on any change to update the site.

### SendGrid ✉️

I went with SendGrid for emails. I've used SendGrid before and I'm honestly never super amazingly happy with it, but it'll work. Tyler didn't want to buy his own email domain so that threw out a lot of providers off the bat. You can change the email template in the netlify function and adjust the validation from netlify.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:
Command Action
npm install Installs dependencies
npm run dev Starts local dev server at localhost:4321
npm run build Build your production site to ./dist/
npm run preview Preview your build locally, before deploying
npm run astro ... Run CLI commands like astro add, astro check
npm run astro -- --help Get help using the Astro CLI

## 👀 Thanks for checking it out!

Whether you're here for Tyler or just checking it out, I hope you got what you needed. Feel free to reach out if you want any help with any of these technologies.
