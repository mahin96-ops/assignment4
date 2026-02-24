1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
ans. 1:getElementbyId diye sudhu id wala element dhore and ektai rturn kore.
     2:getElemntbyClass diye class wala element dhore and onek gula rreturn kore.
     3:quaryselector hocche css selector diye element dhore..

   
2. How do you create and insert a new element into the DOM?
ans. 1:document.createElement() diye notun element banano hoy
     2:   and etar moddhe text, HTML content, class, id or attribute set kora hoy
     3:tarpor setake parent element ar moddhe jog kora hoy
       jemon appendChild(), append(), prepend(), or insertAdjacentElement() use kora hoy


3. What is Event Bubbling? And how does it work?
ans. Event Bubbling hocche emon ekta prokriya jekhane  child element এ event ghotle shei event dhape dhape tar parent → grandparent → document porjonto uthte pare

4. What is Event Delegation in JavaScript? Why is it useful?
ans. Event Delegation holo emon ekta system jeikhane amra onekgulo child element- e aladda alada event na diye, tader common parent e ektai event listene bosai and bubbling use kore spesific child dhorte pari

5. What is the difference between preventDefault() and stopPropagation() methods?
ans: Simple bhashay bolte gele, ei duto method-i browser-er default behavior change kore, kintu tader kajer jayga alada
   1. preventDefault()
Er kaj holo browser-er natural behaviour ba prokritigoto kaj atkane. Mane, kono ekta element-er upor kichu korle browser nije theke ja korar kotha chhilo, seta hobe na.
   2. stopPropagation()
Er kaj holo Event Bubbling atkane. JavaScript-e jokhon tumi kono element-e click koro, oi click event-ta shudhu oi element-ei thake na, seta tar 'Parent'er kacheo chole jay.

