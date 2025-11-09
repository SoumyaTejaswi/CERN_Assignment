package com.todo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "todo")


public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "task")
    private String task;

    @Column(name = "priority")
    private Integer priority;

    public Todo() {}

    public Todo(Long id,String task,Integer priority) {
        this.id = id;
        this.task = task;
        this.priority = priority;
    }

    public Long getId() {
        return id;
    }
    public String getTask() {
        return task;
    }
    public void setTask(String task){
        this.task=task;
    }
    public Integer getPriority(){
        return priority;
    }
    public void setPriority(Integer priority){
        this.priority=priority;
    }
    }
