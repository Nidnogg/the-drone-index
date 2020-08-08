# the cyber artnet

![](https://www.dropbox.com/s/rxfxdhk2epmuqab/glassesuniverse2.png?raw=1)

### Where web artisans get recognition.

Built with Google Spreedsheet, [Next.js](https://nextjs.org/) and deployed at [Vercel](https://vercel.com/).

## Forking this project

This is open source, so if you find this list incomplete or insufficient, do fork this away. [Zeh Fernandes](https://zehfernandes.com/) has been very kind to include worthy instructions to replicate his cool piece of software.

### Link your spreedsheet

1. Duplicate [this spreedhsheet template](https://docs.google.com/spreadsheets/d/12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI/edit)
2. Go to File > Publish to the Web > Publish
3. Copy the id between /spreadsheets/ and /edit in the url: 
	> [https://docs.google.com/spreadsheets/d/__12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI__/edit](https://docs.google.com/spreadsheets/d/12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI/edit)
4. Paste the ID in the file [`pages/api/designers.js`](https://github.com/zehfernandes/brazilianswhodesign/blob/main/pages/api/designers.js)

### Install the dependencies

Making sure you're in the correct project folder and install the dependencies:

```
yarn install
```

### Run the project locally

To start the development server run:

```
yarn dev
```

In your browser, open `localhost:3000`.


### Deploy at vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https%3A%2F%2Fgithub.com%2Fzehfernandes%2Fbrazilianswhodesign)


