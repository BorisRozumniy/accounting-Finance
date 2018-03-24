findIndex = (arr, prop, value) => {
    let arrItem;
    for (let i = 0; arr.length > i; i++) {
        if (arr[i].prop == value)
        arrItem = arr[i].prop;
    };
    return arrItem;
};

// исправить:
// не допускать сохранение пустых значений
// в категориях использовать удаление по ключу а не по индексу
// в категориях закрывать окно редактирования после нажатия на кнопку "сохранить"
// заменить подобный код на функцию :
    // let id = e.target.parentElement.getAttribute('data-categoryid');
    // for ( let i = 0; mainObject.categories.length > i; i++ ) {
    //   if (mainObject.categories[i].id == id)
    //   indexCategoryEditing = mainObject.categories[i];
    // }

// добавить функциональности:
// +++ редактирование историиС
// СОХРАНЯТЬ РЕЗУЛЬТтат в localStorage
// в каждой категории отображать сумму именно этой категории
// разбить историю по месяцам
// стилизировать options

// commit "implemented deletion category id"
