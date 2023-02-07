<?php
    class Query extends Conexion {

        private $pdo, $con, $sql;

        public function __construct() {
            $this->pdo = new Conexion();
            $this->con = $this->pdo->connect();
        }

        public function select(String $sql) {
            $this->sql = $sql;
            $resul = $this->con->prepare($this->sql);
            $resul->execute();
            $data = $resul->fetch(PDO::FETCH_ASSOC);
            return $data;
        }
    }
?>