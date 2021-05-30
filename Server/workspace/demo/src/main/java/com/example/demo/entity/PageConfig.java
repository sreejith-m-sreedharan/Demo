package com.example.demo.entity;

import java.util.List;



public class PageConfig {
	private String name;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List getElems() {
		return elems;
	}
	public void setElems(List elems) {
		this.elems = elems;
	}
	private List<ElementConfig> elems;
}
