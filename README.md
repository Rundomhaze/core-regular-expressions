## Regular expressions

In this exercise, you will work with strings and `RegExp`. More specifically, you will check strings against certain character patterns, which will be determined through regular expressions.

Strings have a large number of available methods that give developers a wonderful ability to process, manipulate, and transform text data. About a dozen of these string methods can be used with regular expressions to provide high-performance matching of strings.

What do we mean by finding matching strings? Let's start with an example of low-level string matching. If you are on a web page, you can use your browser's search option (ctrl + f / ⌘f) to search for a specific word on the page. This search is limited because you need to enter the exact characters you are looking for.

What if you want to find something less specific? Any phone number or any email address on the page? You do not know the exact digits of any phone number that could be on the page, but you can guess that the Russian phone number will probably contain `+7` and 10 digits, and probably will be divided into groups of 3-3-2-2 digits ... This is an example of the possibilities offered by regular expressions.

## Dealing with problems when working with regular expressions

Sometimes you might think that we have defined a regular expression that matches a certain pattern, but when we use it, we realize that it contains an error. Fortunately, there are many resources available on the Internet to help us meet this challenge. For example, [regex101](https://regex101.com/) is a great regular expression editor that you can use to develop and debug your regular expressions.

## Testing functions

We have written tests to check the functions. Your task is to get all the tests passed. The tests are in the folder Spec. Study them.
But before using them, it's a good idea to install them with the command
`npm install`

To run them - enter
`npm test`

### Pre-release. Preparation

You will write your code in `snils.js` file. You have already been provided with the required functions, but they are empty. Your task is to fill in each of them in the process of solving the problem.

### Release 0. SNILS identification.

In this exercise you will work with SNILS numbers. Write the `hasSNILS` function so that it outputs `true` if the specified string contains SNILS, and `false` otherwise (see tests).

### Release 1. Other functions.

Now write the rest of the functions. All tests must pass. Create a separate commit for each written function.

### Release 2. Улучшение тестового покрытия

Tests give us valuable feedback on whether our features work as expected. However, sometimes the code we write passes the tests but does not work correctly.

When you worked on the functions in this exercise, you came across the `formatSNILS` function, which requires matching SNILS in different formats: *12345678900*, *123.456.789.00* and *123--456--789 00*. However, the tests for the hasSNILS function only check that it finds social security numbers in the correct format *123-456-789 00*. Is this check enough, or should the function also find SNILS in other formats?

Add additional tests to make sure your functions work as expected. For example, what do you need to do when you pass a string with a single SNILS in the `hideAllSNILS` or `grabAllSNILS` function?

## Conclusion

Has a user registered on your website using their real email address? What about a real phone number? Can you find all the links in this HTML? Regular expressions and the string methods that use them are very powerful tools. Knowing how to work with them will help you write concise, readable code when working with text.
