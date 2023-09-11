## Dev Log ##

### Environment
- Node.js v18.16.1 (or latest)
    - Click the link below to download Node.js. Use the LTS version
    - [Install Node.js](https://nodejs.org/en)
    - run the following command in `PowerShell` to check if installed correctly:
    ```
    node -v
    ```
- npm v9.8.1 (or latest)
    - After Node.js has downloaded and installed, run the following command in your `PowerShell`:
    ```
    npm install -g npm
    ```
    - run the following command in `PowerShell` to check if installed correctly:
    ```
    npm -v
    ```

### Download the code & Run the Web App
- Open `PowerShell` on your Windows machine
- Make sure you have installed `Node.js` and `npm` correctly
    - run the following command in your `PowerShell`:
    ```
    node -v
    npm -v
    ```
    - if they are installed correctly, the terminal should return their version
- `cd` to your working directory. E.g:
```
mkdir working-dir
cd working-dir
```
- Once you are in your working directory, run the command:

```
git clone https://github.com/dalun-z/faq-cn
```
- After the code has downloaded to your working directory, run the following command:
```
cd FAQ_PAGE
```
```
npm install
```
- After package is installed, to start the Web App, run the command:
```
npm start
```

## Code Templates: ##

### Collapse Content 
![ ](https://github.com/dalun-z/FAQ_PAGE/blob/master/src/images/readme_1.png)

Below is the code template for Collapse Content:

```
<div className="space-y-2">
    <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
        <summary className="px-4 py-6">
            {/* Put The Header 1 Here  */}
        </summary>
        <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
            {/* Put The Content 1 Here  */}
        </span>
    </details>

    <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
        <summary className="px-4 py-6">
            {/* Put The Header 2 Here  */}
        </summary>
        <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
            {/* Put The Content 2 Here  */}
        </span>
    </details>
</div>
```
---