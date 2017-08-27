var item_template = "<li class='{{class}}'>{{num}}.{{name}}({{date}})</li>";
// var data_url = "../json/ajaxtest.txt";
var data_url = "https://awiclass.monoame.com/api/command.php?type=get&name=tododata";
var tododata;

$.ajax(
  {
    url: "ajaxtest.txt",
    // url: data_url,
    dataType: "text",
    success: function(res){
      tododata = JSON.parse(res);
      for(let i=0;i<tododata.length;i++){
        let item = tododata[i];
        let now_class = (item.done == true)?"done":"";
        let now_item = item_template.replace("{{name}}",item.name)
                                    .replace("{{num}}",i+1)
                                    .replace("{{date}}",item.date)
                                    .replace("{{class}}",now_class);
        $("#listitem").append(now_item);
      }
    }
  }
);