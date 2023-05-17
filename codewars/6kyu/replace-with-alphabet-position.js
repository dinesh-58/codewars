// link: https://www.codewars.com/kata/546f922b54af40e1e90001da
// completed date: 11 may 2023

function alphabetPosition(text) {
    let result ='';
    let unicode;
    for(let i in text) {
        unicode = text[i].toLowerCase().charCodeAt();
        if (unicode >= 97 && unicode <=122)
                      result += `${unicode - 96} `;
    }
  return result.trim();
}
