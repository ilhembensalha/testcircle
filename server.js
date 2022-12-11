class Price{
    constructor() {
        this.price = [];
    }

    list() {
        return [...this.price];
    }

    add(title) {
        let todo = {
            title: title,
            completed: false,
        }

        this.price.push(todo);
    }
    complete(title) {
        let todoFound = false;
        this.price.forEach((todo) => {
            if (todo.title === title) {
                todo.completed = true;
                todoFound = true;
                return;
            }
        });

        if (!todoFound) {
            throw new Error(`No TODO was found with the title: "${title}"`);
        }
    }

}
module.exports = Price;