var app = new Vue({
  el: "#app",
  data: {
    header: "Welcome!",
    message: "Let's organize your day!",
    seen: true,
    todoList: [
      { id: 0, text: "Learn JS" },
      { id: 1, text: "Learn Vue" },
      { id: 2, text: "Buy criollitos" },
    ],
    dynamicText: "",
  },

  methods: {
    hideButton: function () {
      this.header = "What are you doing today?";
      this.message = "My to do list: ";
      this.seen = false;
    },
    addItem: function () {
      if (this.dynamicText.length == 0) {
        return;
      } else {
        this.todoList.push({
          id: this.todoList.length,
          text: this.dynamicText,
        });
        this.resetInput();
      }
    },
    resetInput: function () {
      this.dynamicText = "";
    },
    deleteLastItem: function () {
      this.todoList.splice(-1);
    },
    cleanList: function () {
      this.todoList = [];
    },
    deleteItem: function (item) {
      this.todoList.splice(this.todoList.indexOf(item), 1);
    },
    editItem: function (item) {
      console.log(item);
      this.todoList;
      this.dynamicText = this.todoList.indexOf(item);
      if (this.dynamicText.length == 0) {
        return;
      } else {
        /* console.log(this.todoList.indexOf(item)) */
        /* var index = this.todoList.indexOf(item);
                this.todoList. = this.dynamicText; */
      }
    },
  },
});
