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

-----use callback------------------
evita calculos innecesarios en funciones
----optimizar componentes------
react.pureComponent

es similar a react.component usa por defecto shouldComponentUpdate
que comparara props nuevas y viejas.(shallow comparison)

class App extends React.PureComponent {  }
class Counter extends React.PureComponent {  }
class Permissions extends React.PureComponent { }

ademas tambien podemos hacer wrap con use.memo
const App = React.memo(function() {
    
});

const Permissions = React.memo(function({ canEdit }) {
    
});

const Counter = React.memo(function({ count }) {
    
});

pero se debe tener cuidado de usar en todos los componentes por podrias estar haciend todo lo contrario a optimizar lo recomendable es usarlo en componentes que no cambian.

*/
