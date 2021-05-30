package com.example.demo.entity;

public class ElementConfig {
	private String name;
	private String type;
	private String value;
	private Integer action;
	public ElementConfig(String name, String type, String value, Integer action) {
		super();
		this.name = name;
		this.type = type;
		this.value = value;
		this.action = action;
	}
	public Integer getAction() {
		return action;
	}
	public void setAction(Integer action) {
		this.action = action;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
}
