## Dev Log ##

### To Deploy the web
```
npm run deploy
```



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
cd faq-cn
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
import BoxContent from '...somewhere'

<div className="space-y-2">
    <BoxContent>
        <span>
            {/* Put The Header 1 Here  */}
        </span>
        <span>
            {/* Put The Content 1 Here  */}
        </span>
    </BoxContent>

    <BoxContent>
        <span>
            {/* Put The Header 2 Here  */}
        </span>
        <span>
            {/* Put The Content 2 Here  */}
        </span>
    </BoxContent>
</div>
```
---