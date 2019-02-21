# Reproduce Hammerhead Issue 1935

ref: https://github.com/DevExpress/testcafe-hammerhead/issues/1935

## Steps

Serve ok site:

`npm run serve:ok`

Run test, execute in another terminal:

`npm test`

Serve notok site:

`npm run serve:notok`

Run test, execute in another terminal:

`npm test`

## Description

The only difference of this two site are the file name extension of `dynamic.[m]js` at `src/` folder.
Gatsby will keep spread operator if file extension is `mjs`. And for `js` file. It will transform to `Object.assign`.
