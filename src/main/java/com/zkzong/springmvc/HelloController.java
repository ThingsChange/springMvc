package com.zkzong.springmvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by zong on 2016/8/17.
 */
@Controller
@RequestMapping("/api/hello")
public class HelloController {

    @RequestMapping(value="printHello")
    public String printHello(ModelMap model) {
        model.addAttribute("message", "Hello Spring MVC Framewrok!");

        return "hello";
    }
/*
    @RequestMapping(method = RequestMethod.GET)
    public String printHello(ModelMap model) {
        model.addAttribute("message", "Hello Spring MVC Framewrok!");

        return "hello";
    }
*/


}
