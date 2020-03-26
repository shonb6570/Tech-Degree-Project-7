document.querySelector("#autoComplete").addEventListener("autoComplete", function (event) {
  console.log(event.detail);
});
​
const membersText = document.querySelectorAll('.members .members-container .members-text p');
​
let members = [];
​
membersText.forEach(memberText => {
  members.push(memberText.textContent.toLowerCase());
});
​
const autoCompletejs = new autoComplete({
  data: { 
    src: members,
  },
  resultsList: {                       // Rendered results list object      | (Optional)
    render: true,
    container: source => {
        source.setAttribute("id", "user-names");
    },
    destination: document.querySelector("#autoComplete"),
    position: "afterend",
    element: "ul"
  },
});