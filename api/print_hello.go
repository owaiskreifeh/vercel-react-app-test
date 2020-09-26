package handler

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	currentTime := "Hello from GO! lang"
	fmt.Fprintf(w, currentTime)
}