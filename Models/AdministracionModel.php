<?php
    class AdministracionModel extends Query{
        private $id, $nombre, $ruc, $telefono, $direccion, $mensaje;
        public function __construct() {
            parent::__construct();
        }

        public function getEmpresa() {
            $sql = "SELECT * FROM configuracion";
            $data = $this->select($sql);
            return $data;
        }

        public function modificarEmpresa(int $id, string $nombre, string $ruc, string $telefono, string $direccion, string $mensaje){
            $this->id = $id;
            $this->nombre = $nombre;
            $this->ruc = $ruc;
            $this->telefono = $telefono;
            $this->direccion = $direccion;
            $this->mensaje = $mensaje;
            $sql = "UPDATE configuracion 
            SET ruc = ?,
            nombre = ?, telefono = ?,
            direccion = ?, mensaje = ? 
            WHERE id = ?";
            $datos = array($this->ruc, $this->nombre, $this->telefono, $this->direccion, $this->mensaje, $this->id);
            $data = $this->save($sql, $datos);
            if($data == 1){
                $res = "modificado";
            }else{
                $res = "error";
            }
            return $res;
        }
    }

?>