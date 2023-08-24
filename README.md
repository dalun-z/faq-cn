## Dev Log ##



## Code Templates: ##

### Collapse Content 
![ ](https://github.com/dalun-z/FAQ_PAGE/blob/master/src/images/readme_1.png)

Below is the code template for Collapse Content:

```
<div className="space-y-2">
    <details className="w-full rounded-lg ring-1 ring-purple-600">
        <summary className="px-4 py-6">
            {/* Put The Header 1 Here  */}
        </summary>
        <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            {/* Put The Content 1 Here  */}
        </span>
    </details>

    <details className="w-full rounded-lg ring-1 ring-purple-600">
        <summary className="px-4 py-6">
            {/* Put The Header 2 Here  */}
        </summary>
        <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            {/* Put The Content 2 Here  */}
        </span>
    </details>
</div>
```
---

### getPics() Function

```
const getPics = (num) => {
    return (
        <img alt='' src={require('../images/POS_WEB_Images/combo/combo_' + num + '.png')} />
    )
}
```