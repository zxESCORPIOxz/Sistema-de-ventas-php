<?php
    class CajasModel extends Query{

        private $nombre, $estado;

        public function __construct() {
            parent::__construct();
        }

        public function getCajas(){
            $sql = "SELECT * FROM caja";
            $data = $this->selectAll($sql);
            return $data;
        }

        public function registrarCaja(string $nombre){
            $this->nombre = $nombre;
            $verificar = "SELECT * FROM caja WHERE caja = '$this->nombre'";
            $existe = $this->select($verificar);
            if(empty($existe)){
                $sql = "INSERT INTO caja(caja) VALUES (?)";
                $datos = array($this->nombre);
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

        public function editarCaja(int $id){
            $sql = "SELECT * FROM caja WHERE id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function modificarCaja(string $nombre, int $id){
            $this->nombre = $nombre;
            $this->id = $id;
            $sql = "UPDATE caja SET caja = ? WHERE id = ?";
            $datos = array($this->nombre, $this->id);
            $data = $this->save($sql, $datos);
            if($data == 1){
                $res = "modificado";
            }else{
                $res = "error";
            }
            return $res;
        }

        public function accionCaja(int $estado, int $id){
            $this->id = $id;
            $this->estado = $estado;
            $sql = "UPDATE caja SET estado = ? WHERE id = ?";
            $datos = array($this->estado, $this->id);
            $data = $this->save($sql, $datos);
            return $data;
        }
    }
?>