class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class Michela_was_here extends HTMLElement{
	connectedCallback(){
        this.innerHTML = "Michela was here";
	}
}

customElements.define("x-michela", Michela_was_here);