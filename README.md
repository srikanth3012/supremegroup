This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

width: 100%;
height: 150px;
margin-top: 4%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px 0;
position: relative;

      @include md {
        margin-top: 0;
        align-items: center;
      }

      @include sm {
        display: flex;
        flex-direction: row-reverse;
        margin-top: -20%;
      }

      .imgTopCont {
        flex: 10;
        left: 0;

        position: absolute;

        @include sm {
          width: 80%;
          display: flex;
          align-content: center;
          justify-content: center;
          margin-top: 40%;
        }

        video {
          // position: absolute;
          width: 100%;
        }
      }

      .imgBottomCont {
        flex: 2;
        position: absolute;
        bottom: -10em;
        display: flex;
        width: calc(100% - 400px);
        gap: 0 20px;

        @include md {
          width: calc(100% - 100px);
        }

        @include sm {
          display: flex;
          flex-direction: column;
          top: 6em;
          right: -4em;
          gap: 12px 0;
        }

        .catItems {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 60px;
            filter: grayscale(100%) brightness(0.7);
            @include sm {
              width: 40px;
            }
          }
          span {
            color: gray;

            @include sm {
              font-size: 10px;
            }
          }
        }
        .catItems:hover {
          img {
            filter: none;
          }
          span {
            color: white;
          }
        }

        .active {
          img {
            filter: none;
          }
          span {
            color: white;
          }
        }
      }
