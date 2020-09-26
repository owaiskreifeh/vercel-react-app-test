package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	currentTime := "Hello from GO! lang"
	fmt.Fprintf(w, currentTime)
}