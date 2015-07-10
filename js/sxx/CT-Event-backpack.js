/**
 * Created by janisesheng onaccra5-29.
 */


 $(function () {
 FastClick.attach(document.body);
 });

//初始状态下进入页面
$(document).ready(function () {
    myBackPack.setPage_myBackPack_1();

});








//loading动画
function loading(event){
    if(event=="add"){
        $(".container").append("<div id='loader'><p>加载中...</p><span></span><span></span><span></span><span></span></div>");
    }else
    if(event=="remove"){
        $("#loader").remove();
    }
}

////我的背包的面向对象方法 GET,发送服务器内容
var getinfo={

    //我的计划-搜索-巡店人员
    plan_Employee:function(){
        var info= $(".activ #js_plan_Employee").find("option:selected").text();
        return info;
    },

    //我的计划-搜索-巡店类型
    plan_type:function(){
        var info= $(".activ #js_plan_Type").find("option:selected").text();
        return info;
    },

    //我的计划-搜索-巡店状态
    plan_state:function(){
        var info= $(".activ #js_plan_State").find("option:selected").text();
        return info;
    },

    //我的计划-搜索-巡店时间
    plan_datatime:function(){
        var info=[];
        var a= $(".activ #js_plan_Starttime").val();
        var b= $(".activ #js_plan_endtime").val();
        info.push([a,b]);
        return info;
    },

    //返回巡店任务提交内容
    plan_task:function(){
        var info=[];
        var li_length=$(".activ .assessment li").length;

        for(var i= 0;i<li_length;i++){
            var info1= $(".activ .assessment li form select").eq(i).find("option:selected").text();
            var info2= $(".activ .assessment li textarea").eq(i).val();
            info.push([info1,info2]);
        }
        return info;
    }
}