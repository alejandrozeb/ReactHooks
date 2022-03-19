/* 
resuelven el componente hell
las clases trabajan directamente con funciones y no con clases

se puede usar metodos especiales sin la necesidad de compartir o enviar entre componentes


----------USE STATE---------------------
react{useState}

se instancion como un arrray
[name, setname] = useState(False) valor por defecto

--------------USE Effect------------
nos olvidamos del ciclo de vida,y pensamos en los efectos

llamamos una api como ejemplo

----use context---------
pasar  informarcion entre componentes.
podemos trabajar,mejor entre componentes padre-hijo
hijo-padre

--------useReducer-----
como useState pero mas escalable
forma mas amigable para trabaar con el estado
usado con redux mayormente

-------Memoization-------------------------------
Tecnica para evitar calculos innecesarios, optimizacion de memoria.
const memo = [];

function memoFactorial(n) {
	if (n === 1) {
		return 1;
	} else if (!memo[n]) {
		memo[n] = n * memoFactorial(n - 1);
	}  
	return memo[n];
}

ejemplo faactorial
----------useMemo------------------
usamos memorizacion
---------use ref
Manejo de inputs y formularios


*/