package com.example.demo;


public class Disciplina {
    private int id;
    private String nome;
    private double nota;

    public Disciplina (int id, String nome, double nota) {
        this.id = id;
        this.nome = nome;
        this.nota = nota;
    }

    public double getNota() {
        return nota;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
}
