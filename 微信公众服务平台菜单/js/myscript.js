// JavaScript Document
$(function(){

    //弹出层出现
    $(".menu-add,.icon-add,.icon-edit").click(function(){
        $(".mask").show();
    });
    $(".close,.btn-cancel").click(function(){
        $(".mask").hide();
    });

    var $ul=$(".nav");
    //多级菜单
    $ul.on("click",".menu-more",function(){
        $(this).removeClass("menu-more").addClass('menu-more-over');
        $(this).parents("li").siblings().find("i").removeClass("menu-more-over").addClass("menu-more");
        $(this).parents("li").find(".subNav").slideDown(300);
        $(this).parents("li").siblings().find(".subNav").slideUp(300);
    });
    $ul.on("click",".menu-more-over",function(){
        $(this).removeClass("menu-more-over").addClass('menu-more');
        $(this).parents("li").find(".subNav").slideUp(300);
    });

    //点击主菜单添加按钮
    $(".menu-add").click(function(){
        //弹框标记成主菜单
        $("#tabType").val("main");
    });

    //点击二级菜单添加按钮
    $ul.on("click",".icon-add",function(){
        //弹框标记成二级菜单
        $("#tabType").val("side");
        $(".mask").show();
        $(this).parents("li").find(".subNav").addClass("subNav-new");
        $(this).parents("li").siblings().find(".subNav").removeClass("subNav-new");
    });


    //点击弹框确定添加菜单
    $(".btn").on("click",".btn-confirm",function(){
        //获取表单数据
        var tabName=$("#tabName").val();
        var tabLink=$("#tabLink").val();
        var $li="";
        if($("#tabType").val() == "main"){
            //主菜单添加
            $li='<li class="nav-item">' +
                    '<a class="menuItem" target="_blank" href="'+tabLink+'">'+tabName+'</a>' +
                    '<span class="edit">' +
                        '<a class="icon-add" href="javascript:void(0);"></a>' +
                        '<a class="icon-edit" href="javascript:void(0);"></a>' +
                        '<a class="icon-del" href="javascript:void(0);"></a>' +
                    '</span>' +
                    '<i class="menu-more"></i>' +
                    '<ul class="subNav"></ul>' +
                '</li>';
            if(tabName !== ""){
                $ul.append($li);
                $(".mask").hide();
                $(".notice").hide();
            }else{
                $(".notice").show();
            }
        }else{
            $li='<li class="subNav-item">' +
                    '<a class="menuItem" target="_blank" href="'+tabLink+'">'+tabName+'</a>' +
                    '<span class="edit">' +
                        '<a class="icon-edit-sub" href="javascript:void(0);"></a>' +
                        '<a class="icon-del" href="javascript:void(0);"></a>' +
                    '</span>' +
                '</li>';
            if(tabName !== ""){
                $(".subNav-new").append($li);
                $(".mask").hide();
                $(".notice").hide();
            }else{
                $(".notice").show();
            }
        }
        //清空表单数据
        $("#tabName").val("");
        $("#tabLink").val("http://");
    });

    //删除菜单
    $ul.on("click",".icon-del",function(){
        $(this).parents(".subNav-item").remove();
        $(this).parents(".nav-item").remove();
    });

    //编辑菜单
    //主菜单
    $ul.on('click','.icon-edit',function(){
        $(this).parents(".nav-item").addClass("nav-item-new");
        $(this).parents(".nav-item").siblings().removeClass("nav-item-new");
        $(".mask").show();
        $(".btn-confirm").addClass("btn-confirm-edit").removeClass("btn-confirm");
    });
    //二级菜单
    $ul.on('click','.icon-edit-sub',function(){
        $(this).parents(".subNav-item").addClass("subNav-item-new");
        $(this).parents(".subNav-item").siblings().removeClass("subNav-item-new");
        $(".mask").show();
        $(".btn-confirm").addClass("btn-confirm-edit").removeClass("btn-confirm");
    });
    //点击弹框确定修改菜单
    $(".btn").on("click",".btn-confirm-edit",function(){
        $(this).removeClass("btn-confirm-edit").addClass("btn-confirm");
        //获取表单数据
        var tabName=$("#tabName").val();
        var tabLink=$("#tabLink").val();
        if(tabName !== ""){
            $(".nav-item-new>a").text(tabName);
            $(".nav-item-new>a").attr(tabLink);
            $(".nav-item-new").removeClass("nav-item-new");
            $(".subNav-item-new>a").text(tabName);
            $(".subNav-item-new>a").attr(tabLink);
            $(".mask").hide();
        }else{
            $(".notice").show();
        }
    })

    //点击保存按钮
    $(".save").click(function(){
        $(".notice-save").show(200).delay(2000).hide(200);
    });

});
/*-------------自定义函数-------------------------*/
function a_s_r(o,c){
	o.addClass(c).siblings().removeClass(c);
}
