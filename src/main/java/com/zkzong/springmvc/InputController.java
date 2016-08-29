package com.zkzong.springmvc;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.zkzong.entity.Student;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.HttpServletBean;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by wanglijun on 2016/8/17.
 */
@Controller
@RequestMapping("/test/input")
public class InputController {

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public String Test4(HttpServletRequest request, HttpServletResponse response) {
        String fromInput=request.getParameter("name");
        List<Student> list = new ArrayList<Student>();
        List<Student> returnList = new ArrayList<Student>();
        list.add(new Student("1","ghfgs"));
        list.add(new Student("2","dsgsdet"));
        list.add(new Student("1","jhkgdf"));
        list.add(new Student("1","trgtrw"));
        list.add(new Student("1","qqetqewa"));
        list.add(new Student("1","weqrq"));
        list.add(new Student("1","rgeqwf"));
        list.add(new Student("1","eqwrqw"));
        list.add(new Student("1","eqrqerqew"));
        list.add(new Student("1","asdsdas"));
        list.add(new Student("1","asdfdsgfds"));
        list.add(new Student("1","truetrgc"));
        list.add(new Student("1","qeryeq"));
        list.add(new Student("1","asdfads"));
        list.add(new Student("1","qetew"));
        list.add(new Student("1","asvaxca"));
        list.add(new Student("1","wqeyteqwrf"));
        list.add(new Student("1","sdaaxaas"));
        list.add(new Student("1","qetqwereq"));
        list.add(new Student("1","sadgvaxc"));
        list.add(new Student("1","aerhfsd"));
        list.add(new Student("1","yettrjtrghrefvs"));
        list.add(new Student("1","scdvsrewy"));
        list.add(new Student("1","sfdsduwt"));
        list.add(new Student("1","wrtrweytr"));
        for (int i=0;i<list.size();i++){
            Student student = list.get(i);
            if(student.getName().contains(fromInput)){
                returnList.add(student);
            }
        }
        String s = JSONArray.toJSONString(returnList);
        return s;
    }
}
