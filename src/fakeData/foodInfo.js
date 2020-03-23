var foodItems =[
    {"name": "Bagel and cream cheese","title": "How we dream about our future","category": "breakfast","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Breakfast/breakfast4.png"),"price":"6.99"},
    {"name": "Breakfast sandwich","title": "How we dream about our future","category": "breakfast","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Breakfast/breakfast1.png"),"price":"9.99"},
    {"name": "Toast Croissant Fried Egg","title": "How we dream about our future","category": "breakfast","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Breakfast/breakfast2.png"),"price":"19.99"},
    {"name": "Baked Chicken","title": "How we dream about our future","category": "breakfast","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Breakfast/breakfast3.png"),"price":"10.99"},
    {"name": "Eggs Benedict","title": "How we dream about our future","category": "breakfast","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Breakfast/breakfast5.png"),"price":"8.99"},
    {"name": "Full Breakfast Fried Egg Toast Brunch","title": "How we dream about our future","category": "breakfast","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Breakfast/breakfast6.png"),"price":"3.99"},

    {"name": "Healthy Meal Plan","title": "How we dream about our future","category": "lunch","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./lunch/lunch5.png"),"price":"23.99"},
    {"name": "Fried Chicken Bento","title": "How we dream about our future","category": "lunch","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./lunch/lunch2.png"),"price":"9.99"},
    {"name": "Tarragon-Rubbed-Salmon","title": "How we dream about our future","category": "lunch","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./lunch/lunch3.png"),"price":"6.99"},
    {"name": "Indian Lunch","title": "How we dream about our future","category": "lunch","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./lunch/lunch4.png"),"price":"8.99"},
    {"name": "Beef Steak","title": "How we dream about our future","category": "lunch","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./lunch/lunch1.png"),"price":"15.99"},
    {"name": "Honey-Soy-Glazed Salmon with Peppers","title": "How we dream about our future","category": "lunch","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./lunch/lunch6.png"),"price":"7.99"},

    {"name": "Salmon with Grapefruit and Lentil Salad","title": "How we dream about our future","category": "dinner","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Dinner/dinner1.png"),"price":"9.99"},
    {"name": "Lemony salmon Piccata","title": "How we dream about our future","category": "dinner","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Dinner/dinner2.png"),"price":"10.99"},
    {"name": "Pork Tenderloin With Quinoa Pilaf","title": "How we dream about our future","category": "dinner","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Dinner/dinner3.png"),"price":"12.99"},
    {"name": "French fries with cheese","title": "How we dream about our future","category": "dinner","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Dinner/dinner4.png"),"price":"8.99"},
    {"name": "Garlic Butter Baked Salmon","title": "How we dream about our future","category": "dinner","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Dinner/dinner5.png"),"price":"6.99"},
    {"name": "Baked Chicken","title": "How we dream about our future","category": "dinner","description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at ullam! Tempore eos delectus repudiandae accusantium facilis doloremque harum! Consectetur sunt optio tenetur. Provident sit in eius tempora magni? Fugit.","image":require("./Dinner/dinner6.png"),"price":"9.99"}

];

export default foodItems;
