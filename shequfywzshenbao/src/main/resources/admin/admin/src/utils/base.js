const base = {
    get() {
        return {
            url : "http://localhost:8080/shequfywzshenbao/",
            name: "shequfywzshenbao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shequfywzshenbao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区防疫物资申报系统"
        } 
    }
}
export default base
