package main

import (
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from Go! 🚀")
}

func main() {
	http.HandleFunc("/", hello)
	fmt.Println("Go service listening on :8080")
	http.ListenAndServe(":8080", nil)
}
