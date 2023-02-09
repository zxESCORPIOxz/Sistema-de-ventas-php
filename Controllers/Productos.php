<?php
    class Productos extends Controller{
        public function __construct(){
            session_start();
            parent::__construct();
        }

        public function index(){
            if(empty($_SESSION['activo'])){
                header('Location: '.base_url);
            }
            $data['medidas'] = $this->model->getMedidas();
            $data['categorias'] = $this->model->getCategorias();
            $this->views->getView($this, "index", $data);
        }

        public function listar(){
            $data = $this->model->getProductos();
            for ($i=0; $i < count($data); $i++) { 
                $data[$i]['imagen'] = '<img class="img-thumbnail" src="'.base_url."Assets/img/".$data[$i]['foto'].'" width="70"/>';
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarPro('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger" type="button" onclick="btnEliminarPro('.$data[$i]['id'].');"><i class="fas fa-user-alt-slash"></i></button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarPro('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-success" type="button" onclick="btnReingresarPro('.$data[$i]['id'].');"><i class="fas fa-user-check"></i></button>
                    </div>';
                }
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar() {

            $codigo = $_POST['codigo'];
            $nombre = $_POST['nombre'];
            $precio_compra = $_POST['precio_compra'];
            $precio_venta = $_POST['precio_venta'];
            $id_medida = $_POST['medida'];
            $id_categoria = $_POST['categoria'];
            $id = $_POST['id'];

            $img = $_FILES['imagen'];
            $name = $img['name'];
            $tmpname = $img['tmp_name'];
            $destino = "Assets/img/".$name;
            $fecha = date("YmdHis");

            if( empty($codigo) || empty($nombre) || empty($precio_compra) || empty($precio_venta) || empty($id_medida) ||  empty($id_categoria)){
                $msj = "Todos los campos son obligatorios";
            }else{
                if(!empty($name)){
                    $imgNombre = $fecha . ".jpg";
                    $destino = "Assets/img/".$imgNombre;
                }else if(!empty($_POST["foto_Actua+l"]) && empty($name)){
                    $imgNombre = $_POST["foto_Actual"];
                }else{
                    $imgNombre = "default.jpg";
                }
                if($id == ""){
                    $data = $this->model->registrarProducto($codigo, $nombre, $precio_compra, $precio_venta, $id_medida, $id_categoria, $imgNombre);
                    if($data == "ok"){
                        if(!empty($name)){
                            move_uploaded_file($tmpname, $destino);
                        }
                        $msj = "si";
                    }else if($data == "existe"){
                        $msj = "El Producto ya existe";
                    }else{
                        $msj = "Error al registrar el Producto";
                    }
                }else{
                    $imgDelete = $this->model->editarPro($id);
                        if( $imgDelete['foto'] != 'default.jpg' || $imgDelete['foto'] != "" ){
                            if(file_exists('Assets/img/'.$imgDelete['foto'])){
                                unlink('Assets/img/'.$imgDelete['foto']);
                            }
                        }
                        $data = $this->model->modificarProducto($codigo, $nombre, $precio_compra, $precio_venta, $id_medida, $id_categoria, $imgNombre, $id);
                        if($data == "modificado"){
                            if(!empty($name)){
                                move_uploaded_file($tmpname, $destino);
                            }
                            $msj = "modificado";
                        }else{
                            $msj = "Error al modificar el Producto";
                        }
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function editar(int $id){
            $data = $this->model->editarPro($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function eliminar(int $id){
            $data = $this->model->accionProducto(0, $id);
            if ($data == 1){
                $msj = "ok";
            }else{
                $msj = "Error no se pudo eliminar el Producto"; 
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionProducto(1, $id);
            if ($data == 1){
                $msj = "ok";
            }else{
                $msj = "Error no se pudo reingresar el Producto"; 
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function salir(){
            session_destroy();
            header('Location: '.base_url);
        }
    }
    
?>