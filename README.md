# Final-Project-Term1

## MyDoList
---

### Functionality
* This `app` consists of making a simple To-Do list that will be able to get categorized depending on the type of `Task` is chosen.</br>
* User will be able to `Toggle` some specific categories such as; `Personal, Work, Today and Important`, making it easier to prioritize each task.</br>

---

### Details
* `Inputting the task:`</br>
  ![](img/Screen%20Shot%202020-12-17%20at%203.17.00%20PM.png)

1. This will allow the `user` to input the task and click on the `add` button to be placed in the task list.</br>

* `Toggling the Categories:`</br>
  ![](img/Screen%20Shot%202020-12-17%20at%203.17.09%20PM.png)

1. This app will have the amazing capability to toggle the categorization of each task. 
2. Depending on what is toggled it will increase the prioritization of each task. This will allow to each category to have a point system, that when added up will be able to shift to the top or the bottom. For Example:
3. work realated tasks will have a priority of 10 points, 
4. as which for the Personal task will only have 8 points. 
5. However the user will be able to set the prioritization point system on each category `making this app unique` for each user.


* `Task list:`</br>
  ![](img/Screen%20Shot%202020-12-17%20at%203.17.21%20PM.png)

1. This Task list will slide to the right when tak is finished.</br>
2. Tasks on the left on the red will be the pending tasks.</br>

---

## File and folder structure for web development:</br>
* [click here to read more](https://medium.com/@nmayurashok/file-and-folder-structure-for-web-development-8c5c83810a5)
  
  ---

## List to follow from Colin:
Okay, here's what we're talking about:

1. Remove all hard-coded "header has this background-color" and such CSS.

2. Add ONE class for each of our themes to our CSS.

3. Give all html elements the default theme class in our html.

4. Add an event listener to the sidebar buttons that hits all of our items and gives them the corresponding class.

---

For the functionality, I think this is the order you should do it in, and tell me if I'm wrong:

1. make them able to add a task with no categories/tags/whatever at all and have it show up

2. have the tag input buttons be checkboxes

3. make adding a todo item take those checkboxes into account, adding their properties to an object (along with their text)

4. sort them by their point system totals based on those property values

5. do that theming we talked about

6. allow the user to change the point values of categories