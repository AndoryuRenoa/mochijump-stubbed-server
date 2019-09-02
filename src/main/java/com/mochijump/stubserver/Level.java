package com.mochijump.stubserver;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
public class Level {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String levelName;

    @Column(length = 1000000)
    @Lob
    private ArrayList<Integer> startX;

    @Column(length = 1000000)
    @Lob
    private ArrayList<Integer> startY;

    @Column(length = 1000000)
    @Lob
    private ArrayList<Integer> width;

    @Column(length = 1000000)
    @Lob
    private ArrayList<Integer> height;

    @Column(length = 1000000)
    @Lob
    private ArrayList<Integer> hairClipStartX;

    @Column(length = 1000000)
    @Lob
    private ArrayList<Integer> hairClipStartY;

    @Column(length = 1000000)
    @Lob
    private ArrayList<Integer> gooseStartX;

    @Column(length = 1000000)
    @Lob
    private ArrayList<Integer> gooseStartY;

    private int goalStartX;

    private int goalStartY;

    private int mochiStartX;

    private int mochiStartY;


    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }


    public String getLevelName() {
        return levelName;
    }


    public void setLevelName(String levelName) {
        this.levelName = levelName;
        System.out.println(levelName);
    }


    public ArrayList<Integer> getStartX() {
        return startX;
    }

    public void setStartX(ArrayList<Integer> startX) {
        this.startX = startX;
    }

    public ArrayList<Integer> getStartY() {
        return startY;
    }

    public void setStartY(ArrayList<Integer> startY) {
        this.startY = startY;
    }

    public ArrayList<Integer> getWidth() {
        return width;

    }

    public void setWidth(ArrayList<Integer> width) {
        this.width = width;
        System.out.println(width);
    }

    public ArrayList<Integer> getHeight() {
        return height;
    }

    public void setHeight(ArrayList<Integer> height) {
        this.height = height;
    }

    public ArrayList<Integer> getHairClipStartX() {
        return hairClipStartX;
    }

    public void setHairClipStartX(ArrayList<Integer> hairClipStartX) {
        this.hairClipStartX = hairClipStartX;
    }

    public ArrayList<Integer> getHairClipStartY() {
        return hairClipStartY;
    }

    public void setHairClipStartY(ArrayList<Integer> hairClipStartY) {
        this.hairClipStartY = hairClipStartY;
    }

    public ArrayList<Integer> getGooseStartX() {
        return gooseStartX;
    }

    public void setGooseStartX(ArrayList<Integer> gooseStartX) {
        this.gooseStartX = gooseStartX;
    }

    public ArrayList<Integer> getGooseStartY() {
        return gooseStartY;
    }

    public void setGooseStartY(ArrayList<Integer> gooseStartY) {
        this.gooseStartY = gooseStartY;
    }

    public int getGoalStartX() {
        return goalStartX;
    }

    public void setGoaltartX(int goalStartX) {
        this.goalStartX = goalStartX;
    }

    public int getGoalStartY() {
        return goalStartY;
    }

    public void setGoalStartY(int goalStartY) {
        this.goalStartY = goalStartY;
    }

    public int getMochiStartX() {
        return mochiStartX;
    }

    public void setMochiStartX(int mochiStartX) {
        this.mochiStartX = mochiStartX;
    }

    public int getMochiStartY() {
        return mochiStartY;
    }

    public void setMochiStartY(int mochiStartY) {
        this.mochiStartY = mochiStartY;
    }

}
