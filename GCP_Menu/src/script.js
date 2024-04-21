$(document).on('ready',function(){

    var data = [{"id": "1", "name": "name_1", "parent_id": "0", "depth": "0", "index": 0},
    {"id": "2", "name": "name_2", "parent_id": "0", "depth": "0", "index": 0},
    {"id": "3", "name": "name_2.1", "parent_id": "2", "depth": "1", "index": 1},
     {"id": "6", "name": "name_2.1.2", "parent_id": "3", "depth": "1", "index": 2},
     {"id": "5", "name": "name_2.1.1", "parent_id": "3", "depth": "1", "index": 1},
       {"id": "5", "name": "name_2.1.3", "parent_id": "3", "depth": "1", "index": 3},
    {"id": "4", "name": "name_2.2", "parent_id": "2", "depth": "2", "index": 1}];

var endMenu =getMenu("0");

function getMenu( parentID ){

    return data.filter(function(node){ return ( node.parent_id === parentID ) ; }).sort(function(a,b){return a.index - b.index}).map(function(node){
               var exists = data.some(function(childNode){  return childNode.parent_id === node.id; });
              var subMenu = (exists) ? '<ul>'+ getMenu(node.id).join('') + '</ul>' : "";
               return '<li>'+node.name +  subMenu + '</li>' ;
           });
       }
$('#menu').html('<ul>'+endMenu.join('')+ '</ul>');
})