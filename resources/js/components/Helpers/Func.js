export function manageResponse(response) {

  if (response.error) {
    window.toastr["error"](response.error, "Opération non réussie");
  }
  
}