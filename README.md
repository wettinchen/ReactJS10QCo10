## ReactJS Chapter 10
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 Reactjs 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp
### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## ReactJS Chapter 10
   Quick Concept outline
   中文摘要說明與重點提問
   
###  1. Intro 
        教學影片固定的開頭和摘要說明

###  2. The Code Challenge: Your First Project
        可以先自己做，接著比較答案

###  3. Begin Solution: create-react-app and set up <Code更動>
        在 git bash 輸入
        npx create-react-app <檔案名稱>
        開啟舊檔
        刪除以下五個檔案: 
        App.css, App.test.js, logo.svg, reportWebVitals.js, setupTests.js
        在 index.js 中清除 reportWebVitals.js 相關的 code
        在 App.js 中清除 logo.svg 和 App.css 相關的 code
        刪除 App.js 中的 <div></div> 內的內容，並修改為 Hello!

###  4. Outlining the app components <Code更動>
        新增 Square.js 和 Input.js，
        使用快捷鍵 Ctrl + Alt + R，
        輸入 rafce
        在 Square.js 和 Input.js，新增 <h2></h2>
        在 App.js 匯入 Square.js 和 Input.js，
        並新增 Square 和 Input

###  5. The square component <Code更動>
        將 div 改為 section，新增 className, style 和需要的參數。
        新增 p ，可以顯示輸入文字的顏色 或 空值。
        設定方格的預設值

###  6. The form input component <Code更動>
        將 div 改為 form，新增 onSubmit 和需要的參數。
        新增 label, input 和需要的參數。

###  7. useState hook and passing props <Code更動>
        在 App.js 匯入 useState
        指派一個設定顏色的 colorValue Array 至 useState
        在 Square 和 Input 輸入設定顏色的 Array 的參數
       
###  8. Adding CSS styles <Code更動>
        說明加入的 CSS 樣式

###  9. Challenge Complete! How did you do?
        測試以下顏色:
        dodgerblue, steelblue, aliceblue, oldlace

### 10. Additional Feature: Color Names to Hex Values <Code更動>
        指派一個設定 hex 顏色的 hexValue Array 至 useState
        在 Square 和 Input 輸入設定 hex 顏色的 Array 的參數
        在 Square.js 新增 hex 參數與 p
        在 Input.js 新增 hex 參數與 onChange 參數
        在 git bash 輸入
        npm i colornames -S
        在 Input.js 匯入 colorNames，修改 onChange 參數

### 11. Additional Feature: Toggle Text Color
        指派一個設定切換暗色的文字 isDarkText Array 至 useState
        修改 Input 的參數
        在 Square.js 輸入切換暗色的文字 Array 的參數
        在 Input.js 輸入切換暗色的文字 Array 的參數
        在 Input.js 新增切換暗色的文字 button 和 參數
        加入 button 的 CSS 樣式


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
