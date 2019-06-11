// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-tlaxin');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */
var maleCount = function(array){
    return _.filter(array, function(customer){
        return customer.gender === 'male';
    }).length;
};

var femaleCount = function(array){
    return _.reduce(array, function(acc, cur){
        if(cur.gender === 'female'){
            acc++;
        }
        return acc;
    }, 0);
};

var oldestCustomer = function(array){
   let result = _.reduce(array, function(oldest, oponent){
       if(oldest === undefined){
           oldest = oponent;
      }
      else if(oponent.age > oldest.age){
            oldest = oponent;
        }
        else {
            oldest = oldest;
        }
        return oldest;
    });
    return result.name;
};

var youngestCustomer = function(array){
    let result = _.reduce(array, function(kiddo, newKid){
        if(kiddo === undefined){
            kiddo = newKid;
        } else if( kiddo.age > newKid.age){
            kiddo = newKid;
        }else{
            kiddo = kiddo;
        }
        return kiddo;
  });
  return result.name;
};

var averageBalance= function(array){
//   let sum = _.filter(array, function(sum){
//       return sum += array.balance;
//   });
//   let balNum = _.filter(array, function(checker){
//       let counter = 0;
//       if(checker.balance){
//           counter++;
//       }
//       return counter;
//   });
//   let result = sum/array.length;
//   return result;
   let sum = 0;
   let result = 0;
 _.map(array, function(ele, ind, arr){
        let newBalances = ele.balance.replace(/\$/, '')
        let finalBal = newBalances.replace(/\,/, '');
        let numBal= parseFloat(finalBal);
        sum += numBal;
        result = sum/array.length;
    });
    return result;
};

var firstLetterCount = function(array, letter){
    let letterd = _.filter(array, function(startWith){
    return startWith.name[0].toLowerCase() === letter.toLowerCase();
    });
    return letterd.length;
};

var friendFirstLetterCount= function(array, customer, letter){
    let myCustomer = _.filter(array, function(ele, i, a){
        return array[i].name === customer;
    });
     let friends = _.pluck(myCustomer, 'friends')[0];
     return _.filter(friends, function(ele, i, arr){
         return ele.name[0].toLowerCase() === letter.toLowerCase();
     }).length;
         
};

var friendsCount = function(array, name){
return _.reduce(array, function(arr, customer){
  if(_.some(customer.friends, friend => friend.name === name)){
  arr.push(customer.name);
  }
  return arr;
}, []);
};

var topThreeTags= function(array){
    //iterate over customers to get all tags
    let result = _.reduce(array, function(acc, customer, i, arr){
      _.each(customer.tags, function(tag){
        if(acc[tag]){
            acc[tag]++;
        } else{
            acc[tag] = 1;
        }
      });   
    return acc;
    }, {});
    result = _.map(result, function(count, tag, obj){
        return [tag, count];
    })
    result = result.sort(function(a, b){
        return b[1] - a[1];
    }).slice(0, 3);
   return _.map(result, function(tag){
       return tag[0];
   })
};

var genderCount = function(array){
    return _.reduce(array, function(obj, nextCust){
        if(obj[nextCust.gender]){
            obj[nextCust.gender]++;
        }else {
            obj[nextCust.gender] = 1;
        }
        return obj;
    }, {})
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
