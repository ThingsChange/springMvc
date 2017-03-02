package com.zkzong.springmvc.singlePage;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//import static com.sun.webpane.platform.ConfigManager.log;

/**
 * Created by wanglijun on 2016/12/19.
 */
public class SinglePageServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String url = req.getServletPath() + (req.getPathInfo() == null ? "" : req.getPathInfo());
        req.getRequestDispatcher("/index.html").forward(req, resp);
    }
}
