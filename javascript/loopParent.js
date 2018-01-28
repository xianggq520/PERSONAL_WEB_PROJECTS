 

[
    {//一级节点
        id: 1,//"节点唯一标识字段"
        list : [ //子节点集合
            {
                id:2,
                list : [
                    {
                        id:3,
                        list:[]
                    }
                ]
            }
        ]
    }
]

var loopToggleSelectConfig = {
    key: 0,
    loopKey : "authorityTypeId",
    toggleSelect : function(selected, arr){
        this.selected = selected;
        if(this.selected){
            arr && arr.push(this);
            this.parentNode && this.parentNode.toggleSelect && this.parentNode.toggleSelect(selected, arr);
        }
        if(!this.selected && this.list && this.list.length > 0){
            var nodeList = this.list;
            var len = nodeList.length;
            var arrLen = arr ? arr.length : 0;
            while(len -- ){
                nodeList[len].toggleSelect && nodeList[len].toggleSelect(selected, arr);
            }
            while(arrLen -- ){
                if(arr[arrLen][loopToggleSelectConfig.loopKey] === this[loopToggleSelectConfig.loopKey]){
                    arr.splice(arrLen, 1);
                    arrLen = 0;
                }
            }
        }
    }
}

var initLoopNodeList = function(node, loopToggleSelectConfig){
    node._key_ = loopToggleSelectConfig ++;
    var nodeList = node.list;
    var len = nodeList ? nodeList.length : 0;
    node && (node.toggleSelect = node.toggleSelect || loopToggleSelectConfig.toggleSelect);
    while(len --){
        node[len].parentNode = node[len].parentNode || node; 
    }
}