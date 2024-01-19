<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class crime extends Migration
{
    public function up() {
        $this->forge->addField([

    
            'id' => [
                'type' => 'int',
                'constraint' => '100',
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],
            
            'crime_type' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],

            'crime_desc' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],
            


        ]);
    
            $this->forge->createtable('crime');
        
        }
    
        public function down()
        {
            $this->forge->droptable('crime');
        }
    }