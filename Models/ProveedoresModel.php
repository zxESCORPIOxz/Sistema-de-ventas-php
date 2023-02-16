<?php
    class ProveedoresModel extends Query{

        private $ruc, $nombre, $telefono, $direccion, $estado;

        public function __construct() {
            parent::__construct();
        }

        public function getProveedores(){
            $sql = "SELECT * FROM proveedores";
            $data = $this->selectAll($sql);
            return $data;
        }

        public function registrarProveedor(String $ruc, string $nombre, string $telefono, string $direccion){
            $this->ruc = $ruc;
            $this->nombre = $nombre;
            $this->telefono = $telefono;
            $this->direccion = $direccion;
            $verificar = "SELECT * FROM proveedores WHERE ruc = '$this->ruc'";
            $existe = $this->select($verificar);
            if(empty($existe)){
                $sql = "INSERT INTO proveedores(ruc, nombre, telefono, direccion) VALUES (?,?,?,?)";
                $datos = array($this->ruc, $this->nombre, $this->telefono, $this->direccion);
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

        public function editarProveedor(int $id){
            $sql = "SELECT * FROM proveedores WHERE id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function modificarProveedor(String $ruc, string $nombre, string $telefono, string $direccion, int $id){
            $this->ruc = $ruc;
            $this->nombre = $nombre;
            $this->telefono = $telefono;
            $this->direccion = $direccion;
            $this->id = $id;
            $sql = "UPDATE proveedores SET ruc = ?, nombre = ?, telefono = ?, direccion = ? WHERE id = ?";
            $datos = array($this->ruc, $this->nombre, $this->telefono, $this->direccion, $this->id);
            $data = $this->save($sql, $datos);
            if($data == 1){
                $res = "modificado";
            }else{
                $res = "error";
            }
            return $res;
        }

        public function accionProveedor(int $estado, int $id){
            $this->id = $id;
            $this->estado = $estado;
            $sql = "UPDATE proveedores SET estado = ? WHERE id = ?";
            $datos = array($this->estado, $this->id);
            $data = $this->save($sql, $datos);
            return $data;
        }
    }
?>