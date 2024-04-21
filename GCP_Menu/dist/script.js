$(document).on('ready',function(){

var data = [
    {"id": "1", "name": "Compute", "parent_id": "0", "depth": "0", "index": 0},
    {"id": "1.1", "name": "ComputeEngine", "parent_id": "1", "depth": "0", "index": 0},
    {"id": "1.2", "name": "AppEngine", "parent_id": "1", "depth": "0", "index": 0},
    {"id": "1.3", "name": "KubernetesEngine", "parent_id": "1", "depth": "0", "index": 0},
    {"id": "1.4", "name": "GPU", "parent_id": "1", "depth": "0", "index": 0},
    {"id": "1.5", "name": "CloudFunctions", "parent_id": "1", "depth": "0", "index": 0},
    {"id": "1.6", "name": "ContainerOptimizedOS", "parent_id": "1", "depth": "0", "index": 0},
    {"id": "2", "name": "CloudAI", "parent_id": "0", "depth": "0", "index": 0},
    {"id": "2.1", "name": "Clou_ML_Engine", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.2", "name": "Cloud_version_API", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.3", "name": "CLoud_Speech_to_text", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.4", "name": "Cloud_Vedio_Intelligence_API", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.5", "name": "Cloud_AutoML", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.6", "name": "Cloud_TPU", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.7", "name": "Cloud_Natural_language_API", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.8", "name": "Cloud_Translation_API", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.9", "name": "Cloud_Jobs_API", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.10", "name": "Advanced_Solutions_Lab", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.11", "name": "Cloud_Text_To_Speech", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "2.12", "name": "Dialog_flow_Enterprise_Edition", "parent_id": "2", "depth": "0", "index": 0},
    {"id": "3", "name": "DataTransfer", "parent_id": "0", "depth": "1", "index": 1},
    {"id": "3.1", "name": "Transfer_Appliance", "parent_id": "3", "depth": "1", "index": 1},
    {"id": "4", "name": "BigData", "parent_id": "0", "depth": "1", "index": 0},
    {"id": "4.1", "name": "BiG_Query", "parent_id": "4", "depth": "1", "index": 2},
    {"id": "4.2", "name": "Cloud_Data_flow", "parent_id": "4", "depth": "1", "index": 2},
    {"id": "4.3", "name": "Cloud_Data_proc", "parent_id": "4", "depth": "1", "index": 2},
    {"id": "4.4", "name": "Cloud_Data_prep", "parent_id": "4", "depth": "1", "index": 2},
    {"id": "4.5", "name": "Cloud_Composer", "parent_id": "4", "depth": "1", "index": 2},
    {"id": "4.6", "name": "Cloud_Data_lab", "parent_id": "4", "depth": "1", "index": 2},
    {"id": "4.7", "name": "Cloud_Pub_Sub", "parent_id": "4", "depth": "1", "index": 2},
    {"id": "4.8", "name": "GenoMics", "parent_id": "4", "depth": "1", "index": 2},   
	{"id": "4.9", "name": "DataStudio", "parent_id": "4", "depth": "1", "index": 2},   
    {"id": "5", "name": "Identity_Security", "parent_id": "0", "depth": "1", "index": 0},
    {"id": "5.1", "name": "Cloud_IAM", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "5.2", "name": "Cloud_Resource_Manager", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "5.3", "name": "Cloud_Security_Scanner", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "5.4", "name": "Key_Management_Service", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "5.5", "name": "Cloud_Security_Command_Center", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "5.6", "name": "Beyond_Corp", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "5.7", "name": "Data_Loss_Prevention_API", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "5.8", "name": "Identity_Aware_Proxy", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "5.9", "name": "Security_Key_Enforcement", "parent_id": "5", "depth": "1", "index": 1},
    {"id": "6", "name": "Management_Tools", "parent_id": "0", "depth": "1", "index": 0},
    {"id": "6.1", "name": "StackDriver", "parent_id": "6", "depth": "1", "index": 0},
    {"id": "6.2", "name": "Monitoring", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.3", "name": "Logging", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.4", "name": "Error_Reporting", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.5", "name": "Trace", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.6", "name": "Debugger", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.7", "name": "Cloud_Deployment_Manager", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.8", "name": "Cloud_APIS", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.9", "name": "Cloud_Console", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.10", "name": "Cloud_Shell", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.11", "name": "Cloud_Mobile_App", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.12", "name": "Cloud_Billing_API", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "6.13", "name": "Profiler", "parent_id": "6", "depth": "1", "index": 3},
    {"id": "7", "name": "Networking", "parent_id": "0", "depth": "2", "index": 0},
    {"id": "7.1", "name": "Virtual_Private_Cloud", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.2", "name": "Cloud_Balancing", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.3", "name": "Cloud_CDN", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.4", "name": "Cloud_External_IP_Adress", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.5", "name": "Cloud_Firewall_Rules", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.6", "name": "Cloud_Router", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.7", "name": "Dedicated_Interconnect", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.8", "name": "Cloud_DNS", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.9", "name": "Cloud_Network", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.10", "name": "Cloud_Routes", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.11", "name": "Cloud_VPN", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.12", "name": "Partner_Interconnect", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.13", "name": "Cloud_Armor", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.14", "name": "Standard_Network_Tier", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "7.15", "name": "Premium_Network_Tier", "parent_id": "7", "depth": "2", "index": 1},
    {"id": "8", "name": "Developer_Tools", "parent_id": "0", "depth": "2", "index": 0},
    {"id": "8.1", "name": "Cloud_SDK", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.2", "name": "Cloud_Deployment_Manager", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.3", "name": "Cloud_Source_Repositories", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.4", "name": "Maven_AppEngine_Plugin", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.5", "name": "Cloud_Tools_for_PowerShell", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.6", "name": "Cloud_Tools_for_VisualStudio", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.7", "name": "Container_Registry", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.8", "name": "Google_Plugin_for_Eclipse", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.9", "name": "IDE_Plugins", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.10", "name": "Gradle_AppEngine_Plugin", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.11", "name": "Container_Builder", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.12", "name": "Cloud_Tools_for_Intellij", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "8.13", "name": "Cloud_Test_Lab", "parent_id": "8", "depth": "2", "index": 1},
    {"id": "9", "name": "APIPlatform_EcoSystem", "parent_id": "0", "depth": "2", "index": 0},
    {"id": "9.1", "name": "API_Analytics", "parent_id": "9", "depth": "2", "index": 1},
    {"id": "9.2", "name": "API_Monetization", "parent_id": "9", "depth": "2", "index": 1},
    {"id": "9.3", "name": "APIgee_API_platform", "parent_id": "9", "depth": "2", "index": 1},
    {"id": "9.4", "name": "Cloud_EndPoints", "parent_id": "9", "depth": "2", "index": 1},
    {"id": "9.5", "name": "Developer_Portal", "parent_id": "9", "depth": "2", "index": 1},
    {"id": "9.6", "name": "Apigee_Sense", "parent_id": "9", "depth": "2", "index": 1},
    {"id": "10", "name": "Storage_and_Databases", "parent_id": "0", "depth": "2", "index": 0},
    {"id": "10.1", "name": "Cloud_Storage", "parent_id": "10", "depth": "2", "index": 1},
    {"id": "10.2", "name": "Cloud_BigTable", "parent_id": "10", "depth": "2", "index": 1},
    {"id": "10.3", "name": "Cloud_DataStore", "parent_id": "10", "depth": "2", "index": 1},
    {"id": "10.4", "name": "Cloud_Memory_Store", "parent_id": "10", "depth": "2", "index": 1},
    {"id": "10.5", "name": "Cloud_SQL", "parent_id": "10", "depth": "2", "index": 1},
    {"id": "10.6", "name": "Cloud_Spanner", "parent_id": "10", "depth": "2", "index": 1},
    {"id": "10.7", "name": "Persistent_Disk", "parent_id": "10", "depth": "2", "index": 0},
	{"id": "11", "name": "Internet_of_things", "parent_id": "0", "depth": "2", "index": 1},
	{"id": "11.1", "name": "Cloud_IT_Core", "parent_id": "11", "depth": "2", "index": 1}
    ];

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
$(function(){
  var $ul   =   $('.sidebar-navigation > ul');
  
  $ul.find('li a').click(function(e){
    var $li = $(this).parent();
    
    if($li.find('ul').length > 0){
      e.preventDefault();
      
      if($li.hasClass('selected')){
        $li.removeClass('selected').find('li').removeClass('selected');
        $li.find('ul').slideUp(400);
        $li.find('a em').removeClass('mdi-flip-v');
      }else{
        
        if($li.parents('li.selected').length == 0){
          $ul.find('li').removeClass('selected');
          $ul.find('ul').slideUp(400);
          $ul.find('li a em').removeClass('mdi-flip-v');
        }else{
          $li.parent().find('li').removeClass('selected');
          $li.parent().find('> li ul').slideUp(400);
          $li.parent().find('> li a em').removeClass('mdi-flip-v');
        }
        
        $li.addClass('selected');
        $li.find('>ul').slideDown(400);
        $li.find('>a>em').addClass('mdi-flip-v');
      }
    }
  });
  
  
  $('.sidebar-navigation > ul ul').each(function(i){
    if($(this).find('>li>ul').length > 0){
      var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
      var pIntPLeft   = parseInt(paddingLeft);
      var result      = pIntPLeft + 20;
      
      $(this).find('>li>a').css('padding-left',result);
    }else{
      var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
      var pIntPLeft   = parseInt(paddingLeft);
      var result      = pIntPLeft + 20;
      
      $(this).find('>li>a').css('padding-left',result).parent().addClass('selected--last');
    }
  });
  
  var t = ' li > ul ';
  for(var i=1;i<=10;i++){
    $('.sidebar-navigation > ul > ' + t.repeat(i)).addClass('subMenuColor' + i);
  }
  
  var activeLi = $('li.selected');
  if(activeLi.length){
    opener(activeLi);
  }
  
  function opener(li){
    var ul = li.closest('ul');
    if(ul.length){
      
        li.addClass('selected');
        ul.addClass('open');
        li.find('>a>em').addClass('mdi-flip-v');
      
      if(ul.closest('li').length){
        opener(ul.closest('li'));
      }else{
        return false;
      }
      
    }
  }
  
});