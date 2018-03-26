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
// +++деструктуризировать главный объект
// +++в категориях использовать удаление по ключу а не по индексу
// +++в категориях закрывать окно редактирования после нажатия на кнопку "сохранить"
// заменить подобный код на функцию :
    // let id = e.target.parentElement.getAttribute('data-categoryid');
    // for ( let i = 0; mainObject.categories.length > i; i++ ) {
    //   if (mainObject.categories[i].id == id)
    //   indexCategoryEditing = mainObject.categories[i];
    // }

// добавить функциональности:
// +++ редактирование истории
// СОХРАНЯТЬ РЕЗУЛЬТтат в localStorage

let btnLocalStorage = document.querySelector('#toLocalStorageBtn');
let btnUpdate = document.querySelector('#fromLocalStorageBtn');

let l;
saveStore = () => {
  // если в первый раз
  if (!localStorage.finance) {
    let str = JSON.stringify(mainObject);
    localStorage.setItem('finance', str);
    console.log('none finance')
  }
  // если уже что-то сохранялось раньше
  if (localStorage.finance) {
    let obj = JSON.parse(localStorage.finance);
    let {history: hL, categories: cL} = obj;
    //проверяем каждый элемент масива,чтоб не сохранять существующие
    cL.map(y =>{

      ct.map( (x, i, arr) => {
        if (JSON.stringify(x) === JSON.stringify(y)) {
          console.log('===' , x)
          ct.splice(i, 1);
        }
        if (JSON.stringify(x) !== JSON.stringify(y)) {
          console.log('!==', x)
          cL.some(z => z.name !== x.name ? cL.push(x) : false);

        }
      })

    });
    // localStorage.setItem('finance', JSON.stringify(obj));
    console.log(cL);
    l = cL;
  }
};


updateMainObject = () => {
  let obj = localStorage.getItem('finance');
  let fromStore = JSON.parse(obj);

  // update mainObject
  // fromStore.categories.map(fromLSt => {
  //   ct.map(fromMain => {
  //     if (fromLSt.id === fromMain.id)
  //     fromLSt
  //     console.log(fromMain, fromLSt))
  //     if (fr)
  //   }
  // });
  fromStore.categories.map(el => ct.push(el));
  fromStore.history.map(el => hs.push(el));

  // insertCategory(ct);

  // ct.map(categoryObj => {
  //   //update options
  //   addCategoryInSelect(categoryObj.name, selectedCategory, categoryObj.id);
  //   addCategoryInSelect(categoryObj.name, selectEditHistoryName, categoryObj.id);
  //   //update categories in DOM
  //   insertCategory(categoryObj);
  // });
  // console.log(ct, hs)
  //update history in DOM

};

btnLocalStorage.addEventListener('click', saveStore);
btnUpdate.addEventListener('click', updateMainObject);

// в каждой категории отображать сумму именно этой категории
// разбить историю по месяцам
// стилизировать options
