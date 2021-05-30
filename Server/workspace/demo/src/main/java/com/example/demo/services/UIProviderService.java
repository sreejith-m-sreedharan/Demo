package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.ElementConfig;
import com.example.demo.entity.PageConfig;
import com.example.demo.config.Constants;

@Service
public class UIProviderService {
	public PageConfig getPage(String pageName) {
			PageConfig pc = new PageConfig();
			ArrayList <ElementConfig> elems = new ArrayList<ElementConfig>();
			
			elems.add(new ElementConfig("Username", Constants.TXT_SINGLE , null, null));
			elems.add(new ElementConfig("password", Constants.TXT_PWD , null, null));
			elems.add(new ElementConfig("firstname", Constants.TXT_SINGLE , null, null));
			elems.add(new ElementConfig("Login", Constants.BUTTON_SUBMIT , "Login", null));
			
			pc.setElems(elems);
			pc.setName(pageName);
			
			return pc;
	 
	}
}
