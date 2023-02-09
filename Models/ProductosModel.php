<?php
    class ProductosModel extends Query{

        private $codigo, $nombre, $precio_compra, $precio_venta, $id_medida, $id_categoria, $img;

        public function __construct() {
            parent::__construct();
        }

        public function getProductos(){
            $sql = "SELECT productos.*, medidas.nombre as nombreMedida, categorias.nombre as nombreCategoria FROM productos
            INNER JOIN medidas ON productos.id_medida = medidas.id
            INNER JOIN categorias ON productos.id_categoria = categorias.id";
            $data = $this->selectAll($sql);
            return $data;
        }

        public function getMedidas(){
            $sql = "SELECT * FROM medidas WHERE estado = 1";
            $data = $this->selectAll($sql);
            return $data;
        }

        public function getCategorias(){
            $sql = "SELECT * FROM categorias WHERE estado = 1";
            $data = $this->selectAll($sql);
            return $data;
        }

        public function registrarProducto(String $codigo, string $nombre, string $precio_compra, string $precio_venta, int $id_medida, int $id_categoria, string $img){
            $this->codigo = $codigo;
            $this->nombre = $nombre;
            $this->precio_compra = $precio_compra;
            $this->precio_venta = $precio_venta;
            $this->id_medida = $id_medida;
            $this->id_categoria = $id_categoria;
            $this->img = $img;
            $verificar = "SELECT * FROM productos WHERE codigo = '$this->codigo'";
            $existe = $this->select($verificar);
            if(empty($existe)){
                $sql = "INSERT INTO productos(codigo, descripcion, precio_compra, precio_venta, id_medida, id_categoria, foto) VALUES (?,?,?,?,?,?,?)";
                $datos = array($this->codigo, $this->nombre, $this->precio_compra, $this->precio_venta, $this->id_medida, $this->id_categoria, $this->img);
                $data = $this->save($sql, $datos);
                if($data == 1){
                    $res = "ok";
                }else{
                    $res = "error";
                }
            }else{
                $res = "existe";
            }
            return $res;
        }

        public function editarPro(int $id){
            $sql = "SELECT * FROM productos WHERE id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function modificarProducto(String $codigo, string $nombre, string $precio_compra, string $precio_venta, int $id_medida, int $id_categoria, string $img, int $id){
            $this->codigo = $codigo;
            $this->nombre = $nombre;
            $this->precio_compra = $precio_compra;
            $this->precio_venta = $precio_venta;
            $this->id_medida = $id_medida;
            $this->id_categoria = $id_categoria;
            $this->id = $id;
            $this->img = $img;
            $sql = "UPDATE productos SET codigo = ?, descripcion = ?, precio_compra = ?, precio_venta = ?, id_medida = ?, id_categoria = ?, foto = ? WHERE id = ?";
            $datos = array($this->codigo, $this->nombre, $this->precio_compra, $this->precio_venta, $this->id_medida, $this->id_categoria, $this->img, $this->id);
            $data = $this->save($sql, $datos);
            if($data == 1){
                $res = "modificado";
            }else{
                $res = "error";
            }
            return $res;
        }

        public function accionProducto(int $estado, int $id){
            $this->id = $id;
            $this->estado = $estado;
            $sql = "UPDATE productos SET estado = ? WHERE id = ?";
            $datos = array($this->estado, $this->id);
            $data = $this->save($sql, $datos);
            return $data;
        }
    }
?>