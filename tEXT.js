let text = 'Test';
    let upperString = text.toUpperCase()  
    let firstChar = upperString[0].toLowerCase() 
    let restOfString = firstChar + upperString.slice(1) 
    console.log(restOfString) 

/*     

    Завдання 1 Написати скріпт, який призведе до краху вкладки в браузері(па’ятайте про ліміти!) - Не зроблено

    Завдання 2 зроблено не зовсім правильно. 

    Зауваження:
    1) Код буде працювати лише тоді коли перша літера велика а решта малі
    Наприклад - ПрИвІт вСіМ воно перетворить на пРИВІТ ВСІМ, а це неправильно, має бути пРиВіТ ВсІм 
*/