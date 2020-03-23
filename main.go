package main

import (
	"html/template"
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

var tpl = template.Must(template.ParseFiles("./templates/index.gohtml"))

func indexHandler(w http.ResponseWriter, r *http.Request) {
	tpl.Execute(w, nil)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", indexHandler)
	r.PathPrefix("/").Handler(http.StripPrefix("/",
		http.FileServer(http.Dir("templates/"))))
	http.Handle("/", r)
	log.Fatalln(http.ListenAndServe(":8080", nil))
}